import serve from "rollup-plugin-serve";;


export default {
  input: ["redirect/redirect.js"],
  output: { 
  file: "dist/redirect.js"
},
  plugins: [
    serve({
      contentBase: "redirect/",
      host: "0.0.0.0",
      port: 5000,
      allowCrossOrigin: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }),
  ],
};