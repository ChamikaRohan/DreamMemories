
// export const checkUser = async()=>{
//     const apiURL = import.meta.env.VITE_API_BASE_URL;
//     const response = await fetch(`${apiURL}/user/auth`,{
//       credentials: 'include'
//     });
//     const data = await response.json();
//     console.log("data t check user", data);
//     if (response.status == 401) {return false;}
//     else if (data.user === true) {return true;};
// }