#!/usr/bin/env boot
 
(set-env! 
  :source-paths #{"src/"}
  :resource-paths #{"resources/"}
  :dependencies 
    '[[djy "0.1.2"]
      [jayq "2.5.4"]
      [twitter-api "0.7.8"]
      [org.clojure/data.json "0.2.5"]
      [com.revelytix.logbacks/slf4j-log4j12 "1.0.0"]
      [adzerk/boot-cljs          "0.0-2814-0"]
      [ring/ring-core "1.3.2"]
      [ring/ring-devel "1.3.2"]
      [ring/ring-jetty-adapter "1.3.2"]
      [org.clojure/tools.reader "0.9.2"]
      [org.clojure/clojurescript "0.0-3196"]
      [tailrecursion/hoplon      "6.0.0-SNAPSHOT"]
      [tailrecursion/boot-hoplon "0.1.0-SNAPSHOT"]
      [com.cemerick/austin "0.1.6"]])

(require '[boot.pod :as pod]
         '[tailrecursion.boot-hoplon :refer [hoplon prerender]]
         '[adzerk.boot-cljs :refer [cljs]]
         '[ring.adapter.jetty :as jetty]
         '[cemerick.austin])
         
         
(deftask dev
  []
  "Quick iterative development"
  (comp
    (sift
      :include #{ #".*~" #"\.DS_Store"}
      :invert true)
    (watch
      :verbose true)
    (hoplon
      :pretty-print true 
      :lib true)
    (cljs)))

(deftask cljs-repl
  []
  (cljs.repl/repl (cemerick.austin/exec-env)))