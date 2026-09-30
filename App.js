import React,{useState,useEffect} from 'react';
import {View,Text,FlatList,TextInput,TouchableOpacity,StyleSheet,ScrollView,Modal} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CHILDREN=[
  {id:'0.1',name:'SON 0.1 WATCHER',color:'#FFD700',desc:'Watches system. Immutable log.'},
  {id:'v6',name:'EYE V6 LIVE',color:'#FFD700',desc:'Live eye feed - native camera bridge'},
  {id:'eye',name:'EYE V5',color:'#FFD700',desc:'Eye V5 sensors'},
  {id:'king',name:'HOME KING',color:'#00D0FF',desc:'Home automation king'},
  {id:'cyan',name:'CYAN WILD',color:'#00FFD0',desc:'Wild experiments'},
  {id:'fusion',name:'FUSION STUDIO',color:'#FF00D0',desc:'Build APK / Web / 3D'},
  {id:'code',name:'CODE LAB',color:'#7CFF00',desc:'Code snippets and tools'},
  {id:'nino',name:'NINO AI PRIMARY',color:'#00FF88',desc:'Primary assistant - offline'},
  {id:'factory',name:'IMMORTAL FACTORY',color:'#FF4500',desc:'Background workers'},
];

export default function App(){
  const [msgs,setMsgs]=useState([{id:'1',text:'Mhlobo wam ❤️ NINO FINAL ONLINE - TRINITY SEALED 21:41 - 23 Eyes Ready',me:false}]);
  const [t,setT]=useState('');
  const [activeChild,setActiveChild]=useState(null);
  const [tab,setTab]=useState('chat');

  useEffect(()=>{AsyncStorage.getItem('nino').then(d=>{if(d) setMsgs(JSON.parse(d))})},[]);
  useEffect(()=>{AsyncStorage.setItem('nino',JSON.stringify(msgs))},[msgs]);

  const send=()=>{
    if(!t.trim()) return;
    const user={id:Date.now().toString(),text:t,me:true};
    let reply='NINO: '+t+' 🔥 solved - farm logic';
    if(t.toLowerCase().includes('farm')) reply='NINO: Farm soil '+Math.floor(Math.random()*100)+'% water '+Math.floor(Math.random()*100)+'% - planting OPEN 🔥';
    if(t.toLowerCase().includes('eye')) reply='NINO: EYE is now native - no webview needed';
    const ai={id:(Date.now()+1).toString(),text:reply,me:false};
    setMsgs(m=>[...m,user,ai]); setT('');
  };

  return (
    <View style={s.c}>
      <View style={s.header}>
        <Text style={s.hTitle}>👁️ NINO TRINITY 0.1</Text>
        <Text style={s.hSub}>God sleeps. Son watches. Native, no WebView.</Text>
        <View style={s.tabs}>
          <TouchableOpacity onPress={()=>setTab('chat')} style={[s.tab,tab==='chat'&&s.tabA]}><Text style={s.tabT}>💬 FATHER</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>setTab('children')} style={[s.tab,tab==='children'&&s.tabA]}><Text style={s.tabT}>👶 9 CHILDREN</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>setTab('eye')} style={[s.tab,tab==='eye'&&s.tabA]}><Text style={s.tabT}>👁️ EYE LIVE</Text></TouchableOpacity>
        </View>
      </View>

      {tab==='chat' && <>
        <FlatList data={msgs} keyExtractor={i=>i.id} style={{flex:1}} renderItem={({item})=><View style={[s.msg,item.me?s.me:s.ai]}><Text style={item.me?s.tMe:s.tAi}>{item.text}</Text></View>}/>
        <View style={s.row}>
          <TextInput value={t} onChangeText={setT} style={s.inp} placeholder="Bhala mhlobo wam..." placeholderTextColor="#666"/>
          <TouchableOpacity onPress={send} style={s.btn}><Text style={{fontWeight:'900'}}>SEND</Text></TouchableOpacity>
        </View>
      </>}

      {tab==='children' && (
        <ScrollView style={{flex:1}}>
          <View style={s.grid}>
            {CHILDREN.map(ch=>(
              <TouchableOpacity key={ch.id} style={[s.child,{borderColor:ch.color}]} onPress={()=>setActiveChild(ch)}>
                <View style={[s.eyeSmall,{backgroundColor:ch.color}]} />
                <Text style={s.childName}>{ch.name}</Text>
                <Text style={s.childId}>{ch.id}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={s.box}><Text style={s.boxT}>TRINITY SEALED 21:41{'\n'}God: 0 - immutable{'\n'}Son: 0.1 - watches{'\n'}Native build - zero WebView</Text></View>
        </ScrollView>
      )}

      {tab==='eye' && (
        <View style={{flex:1,alignItems:'center',justifyContent:'center',padding:20}}>
          <View style={{width:120,height:120,borderRadius:60,backgroundColor:'#FFD700',marginBottom:20}} />
          <Text style={{color:'#FFD700',fontWeight:'900',fontSize:18}}>EYE V6 LIVE - NATIVE</Text>
          <Text style={{color:'#666',marginTop:10,textAlign:'center'}}>Native eye module ready.{'\n'}No WebView. Bridge to native camera coming.</Text>
        </View>
      )}

      <Modal visible={!!activeChild} animationType="slide">
        <View style={{flex:1,backgroundColor:'#000',paddingTop:40}}>
          <View style={s.modalHeader}>
            <Text style={s.modalTitle}>{activeChild?.name}</Text>
            <TouchableOpacity onPress={()=>setActiveChild(null)} style={s.closeBtn}><Text>✕ CLOSE</Text></TouchableOpacity>
          </View>
          <View style={{flex:1,padding:20,alignItems:'center'}}>
            <View style={{width:80,height:80,borderRadius:40,backgroundColor:activeChild?.color,marginBottom:20}} />
            <Text style={{color:'#fff',fontSize:16,fontWeight:'700'}}>{activeChild?.desc}</Text>
            <Text style={{color:'#666',marginTop:20}}>ID: {activeChild?.id} - Native module</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const s=StyleSheet.create({
  c:{flex:1,backgroundColor:'#000',paddingTop:35},
  header:{padding:10,borderBottomWidth:1,borderColor:'#222'},
  hTitle:{color:'#FFD700',fontSize:22,fontWeight:'900',textAlign:'center'},
  hSub:{color:'#666',textAlign:'center',marginBottom:10},
  tabs:{flexDirection:'row',gap:6},
  tab:{flex:1,backgroundColor:'#111',padding:10,borderRadius:20,alignItems:'center'},
  tabA:{backgroundColor:'#FFD700'},
  tabT:{fontWeight:'900',fontSize:11,color:'#fff'},
  msg:{padding:12,borderRadius:16,margin:4,maxWidth:'85%'},
  me:{alignSelf:'flex-end',backgroundColor:'#FFD700'},
  ai:{alignSelf:'flex-start',backgroundColor:'#1a1a1a',borderWidth:1,borderColor:'#333'},
  tMe:{color:'#000',fontWeight:'600'}, tAi:{color:'#fff'},
  row:{flexDirection:'row',gap:8,padding:8,borderTopWidth:1,borderColor:'#222'},
  inp:{flex:1,backgroundColor:'#111',color:'#fff',borderRadius:20,padding:12,borderWidth:1,borderColor:'#333'},
  btn:{backgroundColor:'#FFD700',padding:12,borderRadius:20,paddingHorizontal:20},
  grid:{flexDirection:'row',flexWrap:'wrap',gap:10,padding:10},
  child:{width:'47%',backgroundColor:'#111',borderRadius:20,padding:15,alignItems:'center',borderWidth:2},
  eyeSmall:{width:50,height:50,borderRadius:25,marginBottom:10},
  childName:{color:'#fff',fontWeight:'900',fontSize:11,textAlign:'center'},
  childId:{color:'#666',fontSize:10,marginTop:4},
  box:{borderWidth:1,borderColor:'#333',padding:15,margin:10,borderRadius:12},
  boxT:{color:'#666',fontFamily:'monospace',fontSize:11},
  modalHeader:{flexDirection:'row',justifyContent:'space-between',padding:15,backgroundColor:'#111'},
  modalTitle:{color:'#FFD700',fontWeight:'900'},
  closeBtn:{backgroundColor:'#FFD700',padding:8,borderRadius:10,paddingHorizontal:12}
});
