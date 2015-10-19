(ns monument.template.page
  (:require [markdown.core :as md]))

(defn render [{page :page}]
  [:div.page.static-page
   (md/md-to-html-string (:content page))])