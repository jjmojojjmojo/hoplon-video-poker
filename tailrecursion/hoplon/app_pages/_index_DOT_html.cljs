(ns tailrecursion.hoplon.app-pages._index_DOT_html
  (:require [video-poker.core :as core]
            [tailrecursion.hoplon :refer [form
                                          audio
                                          input
                                          hgroup
                                          do!
                                          timeout
                                          $text
                                          rely
                                          base
                                          h1
                                          embed
                                          h3
                                          body
                                          keygen
                                          val-id
                                          on-append!
                                          progress
                                          main
                                          cite
                                          on-page-load
                                          object
                                          i
                                          p
                                          nav
                                          ruby
                                          relx
                                          check-val!
                                          a
                                          menu
                                          blockquote
                                          img
                                          $comment
                                          span
                                          track
                                          seq?*
                                          data
                                          u
                                          dl
                                          select
                                          html
                                          thead
                                          del
                                          eventsource
                                          append-child
                                          fieldset
                                          rel
                                          aside
                                          figure
                                          figcaption
                                          q
                                          on!
                                          bdi
                                          video
                                          address
                                          caption
                                          parse-args
                                          by-id
                                          dd
                                          rp
                                          hr
                                          tbody
                                          table
                                          acronym
                                          frame
                                          applet
                                          html-var
                                          add-initfn!
                                          pre
                                          ul
                                          dir
                                          html-time
                                          add-attributes!
                                          html-map
                                          sup
                                          dfn
                                          sub
                                          mark
                                          script
                                          big
                                          button
                                          wbr
                                          strong
                                          li
                                          dt
                                          frameset
                                          td
                                          tr
                                          section
                                          th
                                          optgroup
                                          rel-event
                                          iframe
                                          legend
                                          em
                                          kbd
                                          spliced
                                          article
                                          isindex
                                          abbr
                                          command
                                          source
                                          output
                                          basefont
                                          route-cell
                                          header
                                          datalist
                                          tfoot
                                          s
                                          ins
                                          footer
                                          title
                                          is-ie8
                                          h5
                                          canvas
                                          param
                                          font
                                          div
                                          option
                                          summary
                                          samp
                                          center
                                          small
                                          style
                                          textarea
                                          loop-tpl*
                                          strike
                                          h4
                                          tt
                                          head
                                          add-children!
                                          ol
                                          details
                                          col
                                          vector?*
                                          label
                                          rt
                                          when-dom
                                          h6
                                          link
                                          page-load
                                          colgroup
                                          meter
                                          html-meta
                                          text-val!
                                          bdo
                                          b
                                          code
                                          node?
                                          noframes
                                          replace-children!
                                          noscript
                                          safe-nth
                                          h2
                                          area
                                          br
                                          unsplice]]
            [tailrecursion.javelin :refer [input?
                                           cell
                                           cell?
                                           destroy-cell!
                                           ^{:private true} last-rank
                                           ^{:deprecated true} lift
                                           lens?
                                           set-formula!
                                           cell-doseq*
                                           ^{:private true, :dynamic true} *tx*
                                           deref*
                                           set-cell!
                                           lens
                                           formula?
                                           alts!
                                           dosync*
                                           cell-map
                                           formula]])
  (:require-macros [tailrecursion.hoplon :refer [text
                                                 with-timeout
                                                 sexp
                                                 defelem
                                                 def-values
                                                 with-page-load
                                                 loop-tpl
                                                 with-interval
                                                 with-init!]]
                   [tailrecursion.javelin :refer [with-let
                                                  mx2
                                                  dosync
                                                  cell=
                                                  set-cell!=
                                                  prop-cell
                                                  cell-doseq
                                                  defc
                                                  cell-let-1
                                                  defc=
                                                  macroexpand-all
                                                  mx cell-let]]))
(defc deal-count 0)
(defc current-hand (core/deal-hand))
(defc= current-info (core/read-hand (keys current-hand)))
(defc= current-hand-index (map-indexed #(vector %1 %2) current-hand))
(cell= (prn current-info))
(defc= what-do-i-have (first current-info))
(defc= score (second current-info))
(defc= scored-cards (nth current-info 2))
(defc total 0)
(defc= held-cards (map #(get-in % [1 1 :held]) current-hand-index))
(defc=
  game-state
  (case deal-count 0 :first-deal 1 :second-deal :game-over))
(defc=
  deal-label
  (case
    game-state
    :first-deal
    "deal"
    :second-deal
    "deal"
    :game-over
    "try again"))
(defc= lock-holds (case game-state :game-over true false))
(defn record-score
  "Add the score from the current hand to the total"
  []
  (swap! total #(+ % @score)))
(defn muck
  "Discard the entire hand, reset the deck, re-deal, clear holds"
  []
  (dosync
    (reset! deal-count 0)
    (core/reset-deck)
    (reset! current-hand (core/deal-hand))))
(defn hold-state
  "Set the hold state on a card"
  [idx state]
  (swap!
    current-hand
    (fn [value] (assoc-in (vec value) [idx 1 :held] state))))
(defn apply-to-hand
  "Run the given function against all cards in the hand\n  \n  Func takes three arguments:\n     - the index of the card\n     - the card code\n     - info about the card (map of url, held state)\n  "
  [func]
  (doseq [[idx [card info]] @current-hand-index] (func idx card info)))
(defn toggle-hold
  "Hold/Unhold a card, but only when the user is allowed to\n   do so (they get two chances)"
  [idx]
  (if (not @lock-holds)
    (swap!
      current-hand
      (fn [value] (update-in (vec value) [idx 1 :held] not)))))
(defn new-card
  "Discard the card at the given index, and replace it with a new one"
  [idx]
  (core/discard (get-in @current-hand [idx 0]))
  (reset! current-hand (assoc-in @current-hand [idx] (core/deal))))
(defn replace-hold-cards
  "Replace all of the held cards with new ones"
  []
  (apply-to-hand #(if (not (:held %3)) (new-card %1))))
(defn clear-hold-cards
  "Clear the hold state on all cards"
  []
  (apply-to-hand #(hold-state % false)))
(defn new-cards
  "Discard the unheld cards, get new ones from the deck"
  []
  (case
    @game-state
    :game-over
    (dosync (record-score) (muck))
    :second-deal
    (dosync
      (replace-hold-cards)
      (clear-hold-cards)
      (swap! deal-count inc))
    (dosync (swap! deal-count inc) (replace-hold-cards))))
(html
  (head
    (title "Hoplon Video Poker")
    (link :rel "stylesheet" :href "css/style.css" :type "text/css"))
  (body
    (h1 "Video Poker!")
    (div :text total)
    (div :class "current-hand" :text what-do-i-have)
    (div (button :click new-cards :text (cell= deal-label)))
    (div
      :class
      "hand"
      (loop-tpl
        :bindings
        [[idx [card info]] current-hand-index]
        (div
          :class
          "card"
          (div
            :class
            "indicator"
            :do-class
            (cell=
              {:part-of-hand (boolean (some #{card} scored-cards))})
            (img
              :src
              (cell= (:url info))
              :do-class
              (cell= {:selected (get-in current-hand [idx 1 :held])})
              :click
              #(toggle-hold @idx))))))))