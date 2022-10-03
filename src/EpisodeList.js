import React from 'react';
import Axios from 'axios';
import episodeApi from 'EpisodeApi';
import { Card, Col, Row } from 'antd';
import 'App.css';

class EpisodeDetail extends React.Component {
  state = {
    episode: this.props.episode,
  };

  render() {
    const {
      episode: {
        id,
        name,
        image: { medium: thumbUrl },
      },
    } = this.state;

    return (
      <div style={{ userSelect: 'none' }}>
        {/* {id} : {name} :{' '}
        <img
          style={{ width: '100px' }}
          src={thumbUrl}
          alt=""
          draggable={false}
        /> */}
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt={name} src={thumbUrl} />}
        >
          <Card.Meta title={name} />
        </Card>
      </div>
    );
  }
}

class EpisodeList extends React.Component {
  state = {
    episodeList: [],
  };

  async componentDidMount() {
    // const apiUrl = 'http://localhost:8000/post.json/';

    const apiUrl = '/shows';
    const configs = {
      //   params: { page: 1 },
      params: { q: 'mr-robot', embed: 'episodes' },
    };

    try {
      const response = await episodeApi.get(apiUrl, configs);
      console.log(response);
      const { data, status, statusText, headers, config, request } = response;
      console.group('response');
      console.log(data);
      console.log(status);
      console.log(statusText);
      console.log(headers);
      console.log(config);
      console.log(request);
      console.groupEnd();
      // const { results: postList } = response.data;
      this.setState({ episodeList: data });
    } catch (error) {
      console.log(error);
    }
    // Axios.get(apiUrl, config)
    //   .then((response) => {
    //     console.log(response);
    //     const { data } = response;
    //     // const { results: postList } = response.data;
    //     this.setState({ postList: data });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  render() {
    const { episodeList } = this.state;
    return (
      <div>
        <h1>EpisodeList</h1>
        <Row gutter={10}>
          {episodeList.map((episode, index) => (
            <Col span={8}>
              <EpisodeDetail key={episode.id} episode={episode}></EpisodeDetail>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default EpisodeList;
