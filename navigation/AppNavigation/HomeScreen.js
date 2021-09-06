import React, { Component } from 'react'
import {
    FlatList,
    TouchableOpacity,
    Image,
    View,
    ScrollView
} from 'react-native'
import Post from '../../components/Post'
import SafeAreaView from '../../components/SafeAreaView'
import styles from './styles'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'

class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        this.setHeader()
        const { listPosts } = this.props
        await this.props.getAllPost()
        if (listPosts && listPosts.length > 0) {
            this.setState({ data: listPosts })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { listPosts } = this.props
        console.log('porev', prevProps.listPosts.length)
        console.log('cr', listPosts.length)
        if (prevProps.listPosts.length !== listPosts.length) {
            this.setState({ data: listPosts })
        }
    }

    setHeader = () => {
        const { navigation } = this.props
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Create Or Update Post", "CREATE")}>
                    <Image
                        source={require('../../image/plus.png')}
                        style={styles.plusButton}
                    />
                </TouchableOpacity>
            )
        })
    }

    handleDeletePost = async (id) => {
        this.props.deletePost(id)
        await this.props.getAllPost()
    }

    handleEditPost = async (item) => {
        this.props.navigation.navigate("Create Or Update Post", item)
        await this.props.getAllPost()
    }

    render() {
        const { data } = this.state
        return (
            <SafeAreaView>
                <FlatList
                    data={data}
                    style={styles.flatList}
                    showsVerticalScrollIndicator={false}
                    key={item => item._id}
                    renderItem={({ item }) =>
                        <Post
                            item={item}
                            handleEditPost={this.handleEditPost}
                            handleDeletePost={this.handleDeletePost}
                        />
                    }
                />
                <View style={{ height: 36 }} />
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => {
    return {
        listPosts: state.user.allPost
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllPost: () => dispatch(actions.getAllPosts()),
        deletePost: (id) => dispatch(actions.deletePost(id))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)