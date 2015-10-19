(ns monument.template.header)

(defn render [{pages :pages}]
  [:header#main-header
   [:div.logo-wrapper
    [:div.logo
     [:h1 "monument"]]]
   [:nav#header-nav
    [:ul.nav
     [:li
      [:a {:href "/"} "podcasts"]]
     [:li
      [:a {:href "/events"} "events"]]
     (for [page pages]
       [:li
        [:a {:href (str "/static/" (:name page))}
         (:name page)]])]]])