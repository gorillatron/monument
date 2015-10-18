(ns user
 (:require [clojure.string :refer [join]]
           [reloaded.repl :refer [system reset stop]]
           [clojure.core.async :refer [go-loop go chan <! >!]]
           [monument.system]))


(reloaded.repl/set-init! #'monument.system/create-system)