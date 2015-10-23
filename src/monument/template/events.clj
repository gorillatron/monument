(ns monument.template.events
  (:require [hiccup.form :as form]))


(defn render [{{:keys [name phoneNumber email g-recaptcha-response] :as formdata} :formdata}]
  [:div#event_signup_form.wrapper

   [:script {:src "https://www.google.com/recaptcha/api.js"}]

   [:div.row

    [:div.col-sm-12

     [:p
      "If you want information about upcomming public as well as private parties. Sign up here."
      [:br]
      "You will not be spammed."]

      [:div.form-group

       [:form {:method "POST" :action "/subscribe"}

        [:div.form-group
         [:input.form-control {:type "text" :name "name" :required "true" :placeholder "Good name + Surname" :value name}]]

        [:div.form-group
         [:i " ~ and ~ "]
         [:input.form-control {:type "text" :name "phoneNumber" :placeholder "+47 xxxxxxxx" :value phoneNumber}]
         [:i " ~ and/or ~ "]
         [:input.form-control {:type "email" :name "email" :placeholder "email" :value email}]]

        [:div.form-group
         ;; If we dont allready have a recaptche response then show the recaptcha form.
         ;; If we have a response include it as a hidden field.
         (if (empty? g-recaptcha-response)
               [:div.g-recaptcha {:data-sitekey "6LeGFQUTAAAAACGv1lGJhopCrDE4aHojBO3bLvns"}]
               [:input {:type "hidden" :name "g-recaptcha-response" :value g-recaptcha-response}])]

        [:button.btn.btn-success.btn-lg {:name "button" :type "submit"} "BEAM ME UP"]]]]]])


