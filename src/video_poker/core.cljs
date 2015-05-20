(ns video-poker.core
    (:require [clojure.set :as s]
              [cljs.reader :refer [read-string]]
              [tailrecursion.javelin :refer [cell]]
              [clojure.string :as string])
    (:require-macros [tailrecursion.javelin :refer [cell= defc defc=]]))

;; all card values in one suit
(def suit-range ["A" 2 3 4 5 6 7 8 9 10 "J" "Q" "K"])

(defn suit-code
  [code]
  "Return the suit code (H, C, D, S) for the given card-code"
  (string/upper-case (str (first code))))

(defn suit-urls
  "Construct a vector of urls corresponding to each card in the given suit"
  [suit]
  (let [suit-code (string/upper-case (first suit))]
    (into {} (map (fn [v] [(str suit-code v) (str "cards/" suit "/" v ".svg")]) suit-range))))

;; all cards
(defn deck
  "Creates a deck"
  []
  (let [hearts (suit-urls "hearts")
        spades (suit-urls "spades")
        diamonds (suit-urls "diamonds")
        clubs (suit-urls "clubs")]
    (conj hearts spades diamonds clubs)))

;; discarded cards
(defc discarded [])

;; cards without the discarded ones
(defc available (deck))


(defn reset-deck
  "Resets all of the cells regarding cards dealt and available"
  []
  (reset! discarded [])
  (reset! available (deck)))

(prn available)

;; map of cards to numeric values for sorting
(def card-values
  (into {} (map-indexed (fn [i v] [v (+ i 1)]) suit-range)))

(defn deal
  "Return a random card and update the available atom"
  ([]
    (let [card (rand-nth (vec @available))
          idx (first card)]
      (swap! available dissoc idx)
      card))
  ([pick]
    (let [url (get @available pick)]
      (swap! available dissoc pick)
      [pick url])))
  
(defn discard
  "Put a card in the discard pile"
  [card]
  (swap! discarded conj card))

(defn deal-hand
  "Return a random vector of card codes and their corresponding image urls"
  [& {:keys [fixed num] :or {fixed nil num 5}}]
  (if (not (nil? fixed))
    (map deal fixed)
    (repeatedly num #(deal))))

(defn value-code
  "Return the value code (A, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, K, Q) for the
   given card-code"
  [code]
  (let [value (read-string (subs code 1))]
    (if (integer? value)
      value
      (str value))))

(defn card-value
  "Given a card code, like H1 or CA, return a numeric value for sorting"
  [code]
  (let [value (value-code code)]
    (get card-values value)))
     
(defn count-same-value
  [hand]
  "Given a hand of cards, return a map of each value and the cards within it"
  (group-by #(value-code %1) hand))

(defn count-same-suit
  [hand]
  "Given a hand of cards, return a map of each suit and the cards within it"
  (group-by #(suit-code %1) hand))

(defn pairs
  [hand]
  "Return the number of pairs in the given hand"
  (let [counts (count-same-value hand)]
    (count (filter #(= (count (second %1)) 2) counts))))

(defn pair?
  [hand]
  "Return true if the hand contains exactly one pair"
  (= 1 (pairs hand)))

(defn two-pair?
  [hand]
  "Return true if the hand contains two distinct pairs"
  (= 2 (pairs hand)))
    
(defn three-of-a-kind?
  [hand]
  "Return true if the hand contains 3-of-a-kind (3 cards of the same suit)"
  (let [counts (count-same-value hand)]
    (if 
      (some #(= (count (second %1)) 3) counts)
      true
      false)))

(defn int-sequence?
  [s]
  "Return true if the sequence is numerically sequential. False if not."
  (try
    (reduce 
      (fn [x y] 
        (if (= (- x y) -1) 
          y 
          (throw (js/Error. "Not Sequential"))))
      s)
    true
  (catch js/Error e false)))

(defn straight?
  [hand]
  "Return true if the hand contains cards in a straight, or each card 
   is sequentially higher in value than the previous. Ace can represent 1 or 
   the value after King."
  (let [sorted (sort #(card-value %1) hand)
        numeric (map card-value sorted)
        aces (filterv #(= (value-code %1) "A") sorted)]
    (if (int-sequence? numeric)
      true
      (if (and (= (count aces) 1) (= (last numeric) 13))
        true
        false))))
      
(defn flush?
  [hand]
  "Return true if the hand is a flush (all cards are of the same suit)"
  (let [counts (count-same-suit hand)]
    (if (= (count counts) 1)
      true
      false)))

(defn full-house?
  [hand]
  "Return true if the hand contains a full house, or one pair and one 
   three-of-a-kind"
  (if 
    (and 
      (three-of-a-kind? hand)
      (pair? hand))
    true
    false))

(defn four-of-a-kind?
  [hand]
  "Return true if the hand contains four cards of the same value"
  (let [counts (count-same-value hand)]
    (if (some #(= (count (second %1)) 4) counts)
      true
      false)))

(defn straight-flush?
  [hand]
  "Return true if the hand is a straight flush (it's both sequential and 
   contains cards of the same suit"
  (if 
    (and 
      (straight? hand)
      (flush? hand))
    true
    false))

(defn royal-flush?
  [hand]
  "Return true if the hand is a straight flush, containing the sequence 
   10-J-K-Q-A"
  (if
    (and 
      (straight-flush? hand)
      (some #(= (value-code %1) "A") hand))
    true
    false))

;; mapping of each kind of hand, to its value and check function
(def hands 
    [[50 full-house? "Full House"]
    [10 pair? "Pair"]
    [15 two-pair? "Two Pair"]
    [20 three-of-a-kind? "Three of a Kind"]
    [30 straight? "Straight"]
    [40 flush? "Flush"]
    [60 four-of-a-kind? "Four of a Kind"]
    [70 straight-flush? "Straight Flush"]
    [80 royal-flush? "Royal Flush"]])

(defn read-hand
  [hand]
  "Return a string and a value representing the given hand (e.g. 'Royal Flush' 80)"
  (loop [to-inspect hands]
    (let [[value check name] (first to-inspect)]
      (if (nil? value)
        ["High Card" 0]
        (if (check hand)
          [name value]
          (recur (rest to-inspect)))))))