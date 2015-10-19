(ns monument.template.layout
  (:require [hiccup.page :refer [html5]]
            [monument.template.header :as header]))

(defn render [{body :body pages :pages}]
  (html5
    [:head
     [:link {:rel "stylesheet" :href "/css/index.css"}]]
    [:body
     [:div#wrapper-1.container
      (header/render {:pages pages})
      [:div#content-wrapper body]]]))
