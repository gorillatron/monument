(ns monument.template.layout
  (:require [hiccup.page :refer [html5]]
            [monument.template.header :as header]))

(defn render [{body :body pages :pages}]
  (html5
    [:head]
    [:body
     (header/render {:pages pages})
     [:section#content-wrapper body]]))
