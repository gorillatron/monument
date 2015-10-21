(ns monument.template.events
  (:require [hiccup.form :as form]))

(defn render []
  [:div#event_signup_form.wrapper

   [:script {:src "https://www.google.com/recaptcha/api.js"}]

   [:div.row

    [:div.col-sm-12

     [:form

      [:div.form-group

       [:form {:action "/subscribe" :method "post"}

        [:div.form-group
         [:input.form-control {:type "text" :name "name" :required "true" :placeholder "Good name + Surname" :value ""}]]

        [:div.form-group
         [:i " ~ and ~ "]
         [:input.form-control {:type "text" :name "phoneNumber" :placeholder "+47 xxxxxxxx" :value ""}]
         [:i " ~ and/or ~ "]
         [:input.form-control {:type "email" :name "email" :placeholder "email" :value ""}]]

        [:div.form-group
         [:div.g-recaptcha {:data-sitekey "6LeGFQUTAAAAACGv1lGJhopCrDE4aHojBO3bLvns"}]]

        [:button.btn.btn-success.btn-lg {:name "button" :type "submit"}]]]]]]

   [:script "\n    Array.prototype.slice.call(document.querySelectorAll('input')).forEach(function(input){\n      input.addEventListener('keyup', function(event) {\n        document.querySelector('.g-recaptcha').setAttribute('class', 'g-recaptcha active')\n      })\n    })\n\n    setTimeout(function() {\n      document.querySelector('#mainwrapper').setAttribute('class', 'wrapper show')\n    }, 180)"]])


