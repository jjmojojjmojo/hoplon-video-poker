(ns tailrecursion.hoplon.app-pages._scoringtest_DOT_html
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
(defn deal-and-reset
  "Deal a hand, then reset the deck"
  [& {:keys [fixed]}]
  (let [hand (core/deal-hand :fixed fixed)] (core/reset-deck) hand))
(defc
  hands
  {"Straight - middle"
   (deal-and-reset :fixed ["S3" "D4" "C5" "H6" "D7"]),
   "Straight - ace high"
   (deal-and-reset :fixed ["SA" "DJ" "C10" "HQ" "DK"]),
   "Full house" (deal-and-reset :fixed ["SQ" "D10" "C10" "HQ" "DQ"]),
   "Three of a kind"
   (deal-and-reset :fixed ["S10" "D10" "C10" "HQ" "D2"]),
   "Straight flush, ace low"
   (deal-and-reset :fixed ["SA" "S2" "S3" "S4" "S5"]),
   "High Card - Bug shows up as straight"
   (deal-and-reset :fixed ["HA" "HK" "SQ" "DJ" "D6"]),
   "Flush" (deal-and-reset :fixed ["S3" "S10" "SJ" "SQ" "S2"]),
   "Royal flush" (deal-and-reset :fixed ["HA" "HJ" "H10" "HQ" "HK"]),
   "Straight flush, middle"
   (deal-and-reset :fixed ["D4" "D6" "D8" "D5" "D7"]),
   "Pair" (deal-and-reset :fixed ["S3" "D10" "C10" "HQ" "D2"]),
   "Four of a kind"
   (deal-and-reset :fixed ["S10" "D10" "C10" "H10" "D2"]),
   "Straight - ace low"
   (deal-and-reset :fixed ["SA" "D2" "C3" "H4" "D5"]),
   "Two pair" (deal-and-reset :fixed ["S3" "D10" "C10" "HQ" "DQ"])})
(html
  (head
    (title "Hoplon Video Poker - Hand Scoring Test")
    (link :rel "stylesheet" :href "css/style.css" :type "text/css"))
  (body
    (h1 "Video Poker Testing!")
    (div
      (loop-tpl
        :bindings
        [[expected hand] hands]
        (let [score (core/read-hand (keys @hand))]
          (prn (keys @hand))
          (div
            (h1 :text expected)
            (div
              :class
              "hand"
              (div (span "Hand: ") (span :text (cell= (first score))))
              (div
                (span "Score: ")
                (span :text (cell= (second score))))
              (div
                (span "Cards involved:")
                (span :text (cell= (nth score 2))))
              (loop-tpl
                :bindings
                [[card info] hand]
                (img :src (cell= (:url info)))))))))))