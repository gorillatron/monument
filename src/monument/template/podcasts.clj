(ns monument.template.podcasts
  (:require [clojure.string :as string]))


(defn render [{podcasts :podcasts}]
  (for [row (partition 4 (sort-by #(:id (:soundcloudTrack %)) > podcasts))]
    [:div.row
     (for [podcast row]
       [:div.col-xs-6.col-sm-3.podcast
        [:a {:href (:permalink_url (:soundcloudTrack podcast))}
         [:img.artwork {:src (:artwork_url (:soundcloudTrack podcast))}]
         [:h5 {:itemprop "name"}
          (string/replace (:title (:soundcloudTrack podcast)) #"(?ix) Monument" "")]]])]))


