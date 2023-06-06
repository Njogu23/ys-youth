import React, { useState } from 'react';

const UserSignIn = () => {
    const [ state, setState ] = useState({
        name: "",
        image_url: null
    })
    // const [ image_url, setImage] = useState("")
    // const [ name, setFirstName ] = useState("")

    // useEffect(() => {
    //     if(images < 1) return;
    //     const newImage_urls = []
    //     images.map((i)=> {
    //         return newImage_urls.push(URL.createObjectURL(i));
    //     })
      
    //     setImage_url(newImage_urls[0])
    // }, [images]);

    const imageChange = (e) => {
        setState({
            image_url: e.target.files[0]
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append("name", state.name)
        formData.append("image_url", state.image_url)

        // console.log(...formData)

        fetch("http://[::1]:3000/users", {
            method: "POST",
            body: formData
        })

    }

    // const reader = new FileReader()

    // console.log(isNaN(level_of_education))

    
    return (
        <div>
        <div className='sign-up-div'>
            <form onSubmit={handleSubmit} className="signUpForm">
                <input type="text" onChange={(e)=> setState({
                    name: e.target.value
                })} />
                <div style={{background: "rgb(179, 233, 235)", overflow: "hidden"}}>
                    <label>Profile Photo</label>
                    <input type="file" accept='image/*' multiple={false} onChange={imageChange}/>
                    {state.image_url ? (<img alt="..." src={state.image_url} style={{ height: "200px", width: "200px", borderRadius: "70px"}}/>) : null}
                </div>
                <button>Submit</button>
            </form>
        </div>
        </div>
    );
}

export default UserSignIn;