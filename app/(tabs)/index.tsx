import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, TextInput } from 'react-native';

export default function TabOneScreen() {
  const [textToShow, setTextToShow] = useState('ease');

  useEffect(() => {
    const interval = setInterval(() => {
      setTextToShow((prevText) => (prevText === 'ease' ? 'faster' : 'ease'));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ width: 350 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <View style={styles.button}>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Image source={require('./images/icon.png')} style={{ width: 100, height: 100, resizeMode: 'contain' }} />
          </View>
        </View>
        <Text style={{ fontSize: 27, fontWeight: 'bold', color: 'orange', textAlign: "center" }}>Welcome to the sanjo info tech</Text>
        <View style={styles.imageContainer}>
          <Image source={require('./images/banner.gif')} style={styles.image} />
        </View>
        <Text style={{ fontSize: 20, textAlign: "center" }}>
          In Today's Competitive landscape grow your business{' '}
          <Text style={{ color: 'orange' }}>{textToShow}</Text>
        </Text>
        <TouchableOpacity style={styles.button1}>
          <Text style={[styles.buttonText, { textAlign: 'center' }]}>Reach Out</Text>
        </TouchableOpacity>
        <View style={[styles.imageWrapper,{width:350,overflow:'scroll'}]}>
          <Image source={require('./images/c1.jpeg')}  />
        </View>
        {/*  */}
        <View style={{display:'flex',flexDirection:'row'}}>
          <View style={{width:100}}><Text style={{color:'grey' ,fontSize:26,fontWeight:'200'}}> We optimize your business with our innovative digital strategie.</Text></View>
          <View>
            <Image style={{width:250}} source={require('./images/d1.jpeg')}/>
          </View>
        </View>
        {/* table */}
       <View style={{backgroundColor:'#D3D3D3',padding:20,width:350}}>
       <Text style={{textAlign:'center',fontSize:30,color:'red',margin:10,fontFamily:'bold'}}>Services</Text>
        <View style={{display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
          {/* one */}
          <View>
            <View style={{backgroundColor:'#ffcccb',padding:5}}><Text>Digital Marketing</Text></View>
            <View>SEO</View>
            <View>Google Ads</View>
            <View>Linkedin ADs</View>
          </View>
          {/* two */}
          <View>
            <View>IT SOLUTIONS</View>
            <View>Content Marketing</View>
            <View>Analytics and Reporting</View>
            <View>Creative and messaging</View>
          </View>
          
        </View>
        <TouchableOpacity style={styles.button1}>
          <Text style={[styles.buttonText, { textAlign: 'center' ,backgroundColor:'	'}]}>Know More</Text>
        </TouchableOpacity>
       </View>
       {/* 3 more */}
       <View>
        <Text style={{textAlign:'center',margin:10}}>CASE STUDIES</Text>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
  <View style={{ width: 90, height: 100, backgroundColor: 'grey', alignItems: 'center', justifyContent: 'center' ,borderRadius:10}}>
    <Text style={{color:'#00008b'}}>JobMinar</Text>
  </View>
  <View style={{ width: 90, height: 100, backgroundColor: 'grey', alignItems: 'center', justifyContent: 'center' ,borderRadius:10}}>
    <Text style={{margin:4,color:'#00008b'}}>Lana Enterprises</Text>
  </View>
  <View style={{ width: 90, height: 100, backgroundColor: 'grey', alignItems: 'center', justifyContent: 'center',borderRadius:10 }}>
    <Text style={{margin:4,color:'#00008b'}}>Political Sarshi</Text>
  </View>
</View>

        <TouchableOpacity style={styles.button1}>
          <Text style={[styles.buttonText, { textAlign: 'center' ,backgroundColor:'	'}]}>Discover More</Text>
        </TouchableOpacity>
       </View>
       {/* blogs */}
       <Text style={{textAlign:'center',fontSize:30}}>Blogs</Text>
       <View style={{display:'flex',flexDirection:'row'}}>
        <View><Image style={{width:120,height:150}} source={require('./images/e1.jpeg')}/></View>
        <View><Image style={{width:120,height:150}} source={require('./images/e2.jpeg')}/></View>
        <View><Image style={{width:120,height:150}} source={require('./images/e3.jpeg')}/></View>
       </View>
       <TouchableOpacity style={styles.button1}>
          <Text style={[styles.buttonText, { textAlign: 'center' ,backgroundColor:'	'}]}>View More</Text>
        </TouchableOpacity>
        <View style={{width:350,display:'flex'}}>
        <Text style={{textAlign:'center'}}>Testmonials</Text>
        <Text style={{textAlign:'center'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aperiam exercitationem vero rem molestiae est cupiditate enim tempore consequuntur fugiat. Assumenda adipisci ullam ratione ipsum expedita? Impedit culpa suscipit rerum.</Text>
        <Text style={{marginRight:0,textAlign:'right'}}>-Hello</Text>
        </View>
        {/*  */}
   <View style={{backgroundColor:'#D3D3D3',padding:20}}>
   <View>
          <Image style={{ width: 150, height: 150, resizeMode: 'contain',margin:10 }}  source={require('./images/icon.png')}/>
          <Text style={{fontSize:23 ,color:'#00008b'}}>Information</Text>
          <Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi adipisci, autem ipsa nostrum molestias, aspernatur eaque a sed rerum facere explicabo enim aliquam alias doloremque porro recusandae tenetur reprehenderit deleniti?</Text>
        </View>
        <Text style={{fontSize:23 ,color:'#00008b'}}>Contact</Text>
          <Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi adipisci, autem ipsa nostrum molestias, aspernatur eaque a sed rerum facere explicabo enim aliquam alias doloremque porro recusandae tenetur reprehenderit deleniti?</Text>
          <View>
            <Text style={{fontSize:28,textAlign:'center' ,color:'#00008b'}}>Reach Us</Text>
            <TextInput placeholder='Name' style={{height:50,margin:5,backgroundColor:'white'}} />
            <TextInput placeholder='Email' style={{height:50,margin:5,backgroundColor:'white'}} />
            <TextInput placeholder='Company' style={{height:50,margin:5,backgroundColor:'white'}} />
            <TextInput placeholder='Contact no' style={{height:50,margin:5,backgroundColor:'white'}} />
            <TouchableOpacity style={styles.button1}>
          <Text style={[styles.buttonText, { textAlign: 'center' ,backgroundColor:'	',fontSize:13,margin:10}]}>Submit </Text>
        </TouchableOpacity>
        <Text style={{margin:10}}>sanjo info tech PVT Ltd 2023 All Rights Resevered</Text>
          </View>
   </View>
        {/*  */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '100%',
  },
  line: {
    width: '100%',
    height: 4,
    backgroundColor: 'black',
  },
  button: {
    width: 30,
    height: 20,
    justifyContent: 'space-between',
  },
  button1: {
    backgroundColor: 'lightcoral',
    padding: 10,
    borderRadius: 10,
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    margin: 'auto',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  imageContainer: {
    overflow: 'hidden',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  image: {
    width: '100%',
    height: 360,
  },
  imageWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  c1Image: {
    width: 350,
    resizeMode:'cover'
  },
});
