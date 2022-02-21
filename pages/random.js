import useSwr from 'swr'
import Link from 'next/link'
import styled from 'styled-components';

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSwr('/api/tvshow', fetcher)

  if (error) return <div>Failed to load tv shows</div>
  if (!data) return <div>Loading...</div>

  return (
    <Wrapper>
      <Title>Random Show to binge over the weekend</Title>
      <Name>{data.tvshow.name}</Name>
      <img src={data.tvshow.image}></img>
      <Details>{data.tvshow.averageRuntime} mins | {data.tvshow.language} | {data.tvshow.rating} ⭐️ </Details>
      <h5>
        <p>Hit refresh to see new suggestion</p>
      </h5>
    </Wrapper>
  )
}

const Title = styled.h1`
  color: #dd3737;
`;
const Name = styled.h3`
  color: #4a37dd;
`;
const Details = styled.h4`
  color: #4a37dd;
`;
const Wrapper = styled.div`
  text-align: center;
`;