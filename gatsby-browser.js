import "./src/resources/css/global.css"
import React from "react"
import { Provider } from 'react-redux';
import CacheBuster from "./CacheBuster.js"

import { createStore, applyMiddleware } from 'redux';

const store = createStore(() => [], {}, applyMiddleware());

export const wrapRootElement = ({ element }) => (
     <CacheBuster>
        {({ loading, isLatestVersion, refreshCacheAndReload }) => {
          if (loading) return null
          if (!loading && !isLatestVersion) {
            // You can decide how and when you want to force reload
            refreshCacheAndReload()
          }
          console.log(element)
          return <Provider store={store}>{element}</Provider>
        }}
      </CacheBuster>
    )
