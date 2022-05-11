(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{502:function(s,a,t){"use strict";t.r(a);var e=t(8),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"osmojs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#osmojs"}},[s._v("#")]),s._v(" OsmoJS")]),s._v(" "),t("h2",{attrs:{id:"what-is-osmojs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-osmojs"}},[s._v("#")]),s._v(" What is OsmoJS?")]),s._v(" "),t("p",[s._v("Osmo.js is a JavaScript SDK for writing applications that interact with the Osmosis blockchain from either Node.js, browser, or React Native environments and provides simple abstractions over core data structures, serialization, key management, and API request generation.")]),s._v(" "),t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[s._v("#")]),s._v(" Installation")]),s._v(" "),t("p",[s._v("Grab the latest version off NPM:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" @osmosis-labs/osmo.js\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[s._v("#")]),s._v(" Usage")]),s._v(" "),t("h3",{attrs:{id:"getting-blockchain-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-blockchain-data"}},[s._v("#")]),s._v(" Getting blockchain data")]),s._v(" "),t("h3",{attrs:{id:"transaction-broadcasting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transaction-broadcasting"}},[s._v("#")]),s._v(" Transaction broadcasting")]),s._v(" "),t("h3",{attrs:{id:"osmojs-in-the-browser"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#osmojs-in-the-browser"}},[s._v("#")]),s._v(" OsmoJS in the browser")]),s._v(" "),t("p",[s._v("You can access all the objects of the "),t("code",[s._v("@osmosis-labs/osmo.js")]),s._v(" from the global "),t("code",[s._v("Osmo")]),s._v(" object if you load osmo.js with a "),t("code",[s._v("<script>")]),s._v(" tag.")]),s._v(" "),t("p",[s._v("Include the following in your browser:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('<script\n  crossorigin\n  src="https://unpkg.com/@osmosis-labs/osmo.js/dist/bundle.js"\n><\/script>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"osmojs-in-react-native"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#osmojs-in-react-native"}},[s._v("#")]),s._v(" OsmoJS in React Native")]),s._v(" "),t("p",[s._v("In order to use Terra.js inside React Native, you need to add the "),t("code",[s._v("node-libs-react-native")]),s._v(" package and "),t("code",[s._v("react-native-get-random-values")]),s._v(" package to your React Native app's "),t("code",[s._v("package.json")]),s._v(".")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" node-libs-react-native react-native-get-random-values\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("You will need to register Node.js native modules in an entry point of your application, such as "),t("code",[s._v("index.tsx")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("import 'node-libs-react-native/globals';\nimport 'react-native-get-random-values';\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("Also, add resolvers to your "),t("code",[s._v("metro.config.js")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("module.exports {\n  // ...\n  resolver: {\n    // ...\n    extraNodeModules: require('node-libs-react-native'),\n  },\n  // ...\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);