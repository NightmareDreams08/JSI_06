import React from "react";
import UserItems from "./UserItems";
import { data } from "../mock/mockv2";
import { Grid } from "@nextui-org/react";


const UserContainer = () => {
  return (
    <div>
        <Grid.Container gap={2}>
           {data.map((data) => ( 
             <Grid xs={4} key={data.id}>
                <UserItems  src={data.avatar} name={data.first_name} text={data.email} />
             </Grid>
         ))}
        </Grid.Container>
    </div>
  );
};

export default UserContainer;
