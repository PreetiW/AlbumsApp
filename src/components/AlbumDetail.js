import React from 'react';
import { Text, View, Image } from 'react-native';
import  Card  from './Card';
import CardSection from './CardSection';

const AlbumDetail = ( { album }) => {

	const { title, artist, thumbnail_image } = album;
	const { textContainerStyle, imageStyle } = styles;
	
	return(
		<Card>
			<CardSection>
			  <View>
			  	<Image style={ imageStyle }
			  		source={{ uri:thumbnail_image }}
			  	/>
			  </View>

			  <View style={ textContainerStyle } >
				<Text> { title } </Text>
				<Text> { artist } </Text>
			  </View>
			</CardSection>	
		</Card>

	);

};

const styles = {
	textContainerStyle:{
		justifyContent:'space-around',
		flexDirection:'column'
	},
	imageStyle:{
		width:50,
		height:50
	}

}

export default AlbumDetail


