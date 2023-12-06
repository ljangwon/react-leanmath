import React from 'react';
import styled from 'styled-components';
import PostListItem from './PostListItem';

import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

	:not(:last-child) {
		margin-bottom: 16px;
	}
`;

function PostList(props) {
	const { posts, onClickItem } = props;

	return (
		<Wrapper>
			{posts.map((post, index) => {
				return (
					<PostListItem
						key={post.id}
						post={post}
						onClick={() => {
							onClickItem(post);
						}}
					/>
				);
			})}

			<TableHead>
				<TableRow>
					<TableCell> 번호 </TableCell>
					<TableCell> 제목 </TableCell>
				</TableRow>
			</TableHead>
			{posts.map((post, index) => {
				return (
					<Table>
						<TableBody>
							<TableRow>
								<TableCell>{post.id}</TableCell>
								<TableCell>{post.title}</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				);
			})}
		</Wrapper>
	);
}

export default PostList;
