(ns monument.recaptcha
  (:require [aleph.http :as http]
            [clojure.data.json :as json]
            [byte-streams :as bs]
            [environ.core :refer [env]]
            [ring.util.codec :refer [form-encode]]))


(defn make-request [recaptcha-response]
  (let [payload (form-encode {:response recaptcha-response
                              :secret   (:recaptcha-secret env)})]
    (-> @(http/post "https://www.google.com/recaptcha/api/siteverify"
                    {:headers {:accept "application/json"
                               :content-type "application/x-www-form-urlencoded"}
                     :body payload})
        :body
        bs/to-string
        (json/read-str :key-fn keyword))))

(defn validate-response [recaptcha-response]
  (make-request recaptcha-response))
