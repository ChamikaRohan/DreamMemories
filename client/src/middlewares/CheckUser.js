const apiURL = import.meta.env.VITE_API_BASE_URL;

export const checkUser = async()=>{
    const response = await fetch(`${apiURL}/user/auth`,{
      credentials: 'include'
    });
    const data = await response.json();

    if (response.status == 401) {return false;}
    else if (data.user === true) {return true;};
}