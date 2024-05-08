import './style-home.css';

import { Component } from 'react';
import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-post';
import { Buttom } from '../../components/ButtonLoadMorePosts';
import { TextInput } from '../../components/TextInput';

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 6,
    searchValue: ''
  }


  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    const { page, postsPerPage } = this.state;
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos
    })
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts,
    } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({
      posts,
      page: nextPage
    });
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ searchValue: value })
  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = (page + postsPerPage) >= allPosts.length;
    // console.log(postsPerPage)

    const filteredPosts = !!searchValue ? allPosts.filter(post => {
      let filterResult = post.title.toLowerCase().includes(searchValue.toLowerCase());
      return filterResult;
    }) : posts

    return (
      <section className="container">

        <div className='center-container'>
          <TextInput searchValue={searchValue} handleChange={this.handleChange} placeholderContent={"Busque por um card..."}></TextInput>
        </div>

        {/* short-circuit */}
        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts}></Posts>
        )}

        {filteredPosts.length === 0 && (
            <div className='center-container'>
              <p id='text-result'>Resultado não encontrado!</p>
            </div>
          )
        }

        {!searchValue && (
          <Buttom text="Load more posts" triggederEvent={this.loadMorePosts} colorButtom={'blue'} disabled={noMorePosts}></Buttom>
        )}
        {/* <Buttom text="Seconde" colorButtom={'blue'} disabled={noMorePosts}></Buttom> */}
      </section>
    );
  }
}

