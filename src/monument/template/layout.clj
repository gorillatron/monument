(ns monument.template.layout
  (:require [hiccup.page :refer [html5]]
            [monument.template.header :as header]))

(defn render [{body :body pages :pages active-page :active-page}]
  (html5
    [:head
     [:link {:rel "stylesheet" :href "/css/index.css"}]]
    [:body
     [:div#wrapper-1.container
      (header/render {:pages pages :active-page active-page})
      [:div#content-wrapper body]]]))
