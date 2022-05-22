import React from "react";
import{User,Card,Text} from "@nextui-org/react";


const UserItems =(props) => {
    console.log(props)
return(
    <Card shadow>
<User 
src= {props.src}
name={props.name}
/>
<Text h4 color="primary">
    {props.text}
</Text>
    </Card>
)
}
export default UserItems
