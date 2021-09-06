import React, { useEffect, useLayoutEffect, useState } from 'react'
import {
    Keyboard,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native'
import SafeAreaView from '../../components/SafeAreaView'
import FormInput from '../../components/FormInput'
import styles from './styles'
import { SCREEN_WIDTH } from '../../ultis/Dimentions'
import FormButton from '../../components/FormButton'
import CONSTANT from '../../ultis/constant'
import { useDispatch } from 'react-redux'
import { createPost, getAllPosts } from '../../redux/actions'

const CreatePost = ({ route, navigation }) => {
    const [state, setState] = useState({
        title: '',
        content: "",
        author: ''
    })

    const [borderColor, setBorderColor] = useState({
        author: null,
        title: null,
        content: null
    })

    const dispatch = useDispatch()

    useEffect(() => {
        if (route.params === "CREATE")
            return
        else {
            //set info by passing params
            let info = route.params
            setState({
                title: info.title,
                content: info.content,
                author: info.author
            })
        }
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: route.params === "CREATE" ? "Create New Post" : "Update Post"
        })
    }, [])

    const validateInput = () => {
        if (!state.author) {
            setBorderColor(prev => ({ ...prev, author: CONSTANT.RED }))
            return false
        }
        if (!state.title) {
            setBorderColor(prev => ({ ...prev, title: CONSTANT.RED }))
            return false
        }
        if (!state.content) {
            setBorderColor(prev => ({ ...prev, content: CONSTANT.RED }))
            return false
        }

        return true
    }

    const handleCreatePost = () => {
        setBorderColor({
            author: null,
            title: null,
            content: null
        })

        const valid = validateInput()
        if (!valid)
            return
        else {
            //dispatch action
            dispatch(createPost(state))
            navigation.goBack()
            dispatch(getAllPosts())
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView>
                <ScrollView
                    style={styles.scrollView}
                    showsVerticalScrollIndicator={false}
                >
                    <FormInput
                        title="Author"
                        placeholder="Type your nickname (Optional)"
                        value={state.author}
                        borderColor={borderColor.author}
                        setValue={(text) => setState(prev => ({ ...prev, author: text }))}
                    />

                    <FormInput
                        title="Title"
                        placeholder="Type title ..."
                        borderColor={borderColor.title}
                        value={state.title}
                        setValue={(text) => setState(prev => ({ ...prev, title: text }))}
                    />

                    <FormInput
                        title="Content"
                        value={state.content}
                        placeholder="Type content ..."
                        borderColor={borderColor.title}
                        numberOfLine={4}
                        height={SCREEN_WIDTH / 3}
                        setValue={(text) => setState(prev => ({ ...prev, content: text }))}
                    />

                    <FormButton
                        title={route.params === "CREATE" ? "Create" : "Update"}
                        onPress={handleCreatePost}
                    />
                </ScrollView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default CreatePost