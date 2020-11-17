import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Button } from "react-native";
import firebase from "../database/firebase";
import { ListItem, Avatar } from "react-native-elements"; /* para los userss */
const UserList = (props) => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        firebase.db.collection('users').onSnapshot(querySnapshot => { /* los datos que hay la base de datos */
            const users = [];
            querySnapshot.docs.forEach(doc => {
                const { name, email, phone } = doc.data();
                users.push({
                    id: doc.id,
                    name,
                    email,
                    phone
                });
            });
            setUsers(users)
        });
    }, []);

    return (
        <ScrollView>
            <Button
                title="Create User"
                onPress={() => props.navigation.navigate('CreateUserScreen')} />
            {
                users.map(user => {
                    return (
                        <ListItem
                            key={user.id}
                            bottomDivider
                            onPress={() => {
                                props.navigation.navigate('UserDetailScreen', {
                                    userId: user.id
                                    })}
                            }
                            >
                            {/* tipo icono inicio de la lista */}
                            <ListItem.Chevron /> 
                            <Avatar 
                            source={{uri: 'https://reactnativeelements.com/img/avatar/avatar--title.jpg'}}
                            rounded
                            />
                            <ListItem.Content>
                                <ListItem.Title>{user.name}</ListItem.Title>
                                <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>

                    )
                })
            }
        </ScrollView>
    )
}

export default UserList;