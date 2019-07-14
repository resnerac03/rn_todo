import React from 'react';
import { StyleSheet, Text, Button, TouchableOpacity } from 'react-native';

export default class TodoItem extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        const todoItem = this.props.todoItem;   
        

        return(
            <TouchableOpacity 
            style={styles.todoItem}
            onPress={() => this.props.toggleDone()}
            >
                <Text style={(todoItem.done) ? { color: '#aaaaaa'} : { color: '#313131' }}>
                    {todoItem.title}
                </Text>

                <Button 
                    title="Remove"
                    color={(todoItem.done) ? '#aaaaaa' : '#313131' }
                    onPress={() => this.props.removeTodo()}
                />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    todoItem: {
        width: '100%',
        height: 40,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15
    }
})