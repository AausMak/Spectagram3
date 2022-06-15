import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class PostCard extends Component {
    render() {
        return (
            <View style={StyleSheet.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.authorContainer}>
                        <View style={styles.authorImageContainer}>
                            <Image
                                source={require("../assets/profile_img.png")}
                                style={styles.profileImage}
                            ></Image>
                        </View>
                        <View>
                            <Text style={styles.authorNameText}> 
                                {this.props.post.author}
                            </Text>
                        </View>
                    </View>
                    <Image source={require("../assets/post.jpeg")}
                    style={styles.postImage}/>
                    <View style={styles.captionContainer}>
                        <Text style={styles.captionText}>
                            {this.props.post.caption}
                        </Text>
                    </View>
                    <View style={styles.actionContainer}>
                        <View style={styles.likeButton}>
                            <Ionicons name={"heart"} color={"white"} size={RFValue(30)}/>
                            <Text style={styles.likeText}>12K</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}