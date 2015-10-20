(ns monument.template.header)

(defn render [{pages :pages active-page :active-page}]
  [:header#main-header
   [:div.logo-wrapper
    [:div.logo
     [:h1 "monument"]]]
   [:nav#header-nav
    [:ul.nav
     [:li {:class (if (= active-page "podcasts")
                   "active" "")}
      [:a {:href "/"}
       "podcasts"]]
     [:li
      [:a {:href "/events"} "events"]]
     (for [page pages]
       [:li {:class (if (= active-page (:name page))
                     "active" "")}
        [:a {:href (str "/static/" (:name page))}
         (:name page)]])]]])