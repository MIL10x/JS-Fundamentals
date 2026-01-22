

//optional chaining
const response = {
  user: {
    name: "Milton",
    address: {
      city: "Chennai"
    }
  }
};

console.log(response.user?.address?.city); //it will print the chennai

const response2 = {
  user: null
};

// const user = {
//     name: "Milton",
//     address: null
// };

// Without optional chaining:
// console.log(user.address.city); //  Error: Cannot read properties of null

// With optional chaining:
// console.log(user.address?.city); // ✅ undefined, no error, compilor show error


// console.log(response2.user?.address?.city); // comipler autmatically detect the value and show no property is found
// undefined (no crash)


//demo for api
// fetch('/api/user')
//   .then(res => res.json())
//   .then(response => {
//     console.log(response?.user?.name); // Safe even if user is missing
//     console.log(response?.user?.address?.city); // Safe access
//   })
//   .catch(error => console.error("API Error", error));



