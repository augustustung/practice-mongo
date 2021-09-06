import React, { useState } from 'react'
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../ultis/Dimentions'
import CONSTANT from '../ultis/constant'
import moment from 'moment'

const Post = ({ item, handleEditPost, handleDeletePost }) => {
    const [open, setOpen] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.info}>
                    <Text style={styles.author}>{item.author}</Text>
                    <Text style={styles.time}>{moment(item.updatedAt).format("MMM Do YY")}</Text>
                </View>
                <TouchableOpacity onPress={() => setOpen(!open)}>
                    <Image
                        source={require('../image/more.png')}
                        style={styles.moreButton}
                    />
                </TouchableOpacity>
                {
                    open && (
                        <View style={styles.actionsFloat}>
                            <TouchableOpacity style={styles.actionButtonDelete} onPress={() => handleDeletePost(item._id)}>
                                <Text style={styles.textButton}>Delete</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionButtonEdit} onPress={() => handleEditPost(item)}>
                                <Text style={styles.textButton}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }
            </View>

            <View style={styles.footer}>
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subTitle}>{item.content}</Text>
                </View>


                <View style={styles.tt}>
                    <TouchableOpacity>
                        <Image
                            source={require('../image/liked.png')}
                            style={styles.like}
                        />
                    </TouchableOpacity>
                    <Text style={styles.subTitle}>{item.like} {item.like > 0 ? "likes" : "like"}</Text>
                </View>
            </View>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH - 32,
        height: (SCREEN_HEIGHT - 48) / 3,
        padding: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        borderWidth: 1,
        borderColor: CONSTANT.NEUTRAL_GREY,
        shadowOpacity: 0.4,
        elevation: 4,
        marginTop: 16
    },
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 28
    },
    info: {
        flexDirection: 'column'
    },
    author: {
        fontWeight: '700',
        color: CONSTANT.NEUTRAL_DARK,
        fontSize: 16,
        lineHeight: 21
    },
    time: {
        fontWeight: '400',
        fontSize: 12,
        color: CONSTANT.NEUTRAL_DARK,
        lineHeight: 16
    },
    moreButton: {
        height: 24,
        width: 24
    },
    footer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    title: {
        fontWeight: '700',
        color: CONSTANT.NEUTRAL_DARK,
        fontSize: 17,
        lineHeight: 21,
        paddingBottom: 8
    },
    subTitle: {
        fontWeight: '400',
        color: CONSTANT.NEUTRAL_DARK,
        fontSize: 14,
        lineHeight: 21
    },
    tt: {
        flexDirection: 'row'
    },
    like: {
        width: 24,
        height: 24,
        marginRight: 4
    },
    actionsFloat: {
        height: 70,
        position: 'absolute',
        right: 24,
        top: 8,
        zIndex: 2
    },
    actionButtonDelete: {
        padding: 10,
        width: 60,
        backgroundColor: CONSTANT.PRIMARY_RED,
        borderRadius: 5,
        zIndex: 3
    },
    actionButtonEdit: {
        padding: 10,
        width: 60,
        backgroundColor: CONSTANT.PRIMARY_GREEN,
        borderRadius: 5,
        marginTop: 8,
        zIndex: 3
    },
    textButton: {
        color: "#fff",
        fontWeight: '700'
    }
})
