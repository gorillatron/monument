(ns monument.template.events
  (:require [hiccup.form :as form]))


(defn- recaptcha-class [{:keys [name phoneNumber email]}]
 (if (or (not-empty name)
         (not-empty phoneNumber)
         (not-empty email))
  "active"
  "inactive"))


(defn render [{{:keys [name phoneNumber email g-recaptcha-response] :as formdata} :formdata}]
  [:div#event_signup_form.wrapper

   [:script {:src "https://www.google.com/recaptcha/api.js"}]

   [:div.row

    [:div.col-sm-12

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
         (if (empty? g-recaptcha-response)
               [:div.g-recaptcha {:data-sitekey "6LeGFQUTAAAAACGv1lGJhopCrDE4aHojBO3bLvns" :class (recaptcha-class formdata)}]
               [:input {:type "hidden" :name "g-recaptcha-response" :value g-recaptcha-response}])]

        [:button.btn.btn-success.btn-lg {:name "button" :type "submit"} "BEAM ME UP"]]]]]

   [:script "\n    Array.prototype.slice.call(document.querySelectorAll('input')).forEach(function(input){\n      input.addEventListener('keyup', function(event) {\n        document.querySelector('.g-recaptcha').setAttribute('class', 'g-recaptcha active')\n      })\n    })\n\n    setTimeout(function() {\n      document.querySelector('#mainwrapper').setAttribute('class', 'wrapper show')\n    }, 180)"]])


