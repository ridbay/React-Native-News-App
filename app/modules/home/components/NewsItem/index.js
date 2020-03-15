 import React from 'react';
 import {Text, View, TouchableHighlight, Image} from 'react-native';
 import moment from 'moment';

 import {Actions} from 'react-native-router-flux';

 import styles from './styles';


 const NewsItem = ({article}) => {
     const {title, url, source, publishedAt} = article;
     return(
         <TouchableHighlight 
         style={styles.container}
         underlayColor={"transparent"}
         onPress={() => Actions.Article({article, title})}>
             <View style={[styles.wrapper]}>
                {
                    article.urlToImage && <Image source={{uri: article.urlToImage}} style={styles.img} />
                }
             </View>

         </TouchableHighlight>
     )
 }
