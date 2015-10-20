(ns monument.pages.podcasts.core
      (:require-macros [cljs.core.async.macros :refer [go]])
      (:require [cljs.core.async :refer [>! <! chan timeout]]))

(enable-console-print!)


(defn ->Array [array-like]
      (.call js/Array.prototype.slice array-like))

(def render-chan (chan))

(go (while true
           (<! (timeout 66))
           (js/requestAnimationFrame
                 (fn [] (go
                              (let [el (<! render-chan)]
                                   (.add (aget el "classList") "show")))))))

(doseq [el (->Array (js/document.querySelectorAll ".podcast"))]
      (go (>! render-chan el)))
