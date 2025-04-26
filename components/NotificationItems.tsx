import { View, Text, StyleSheet, Image } from 'react-native';

const NotificationItems = ({ title, message, time, icon, unread, type }) => {
    const getBackgroundColor = () => {
      switch (type) {
        case 'success':
          return '#DFF6DD';
        case 'error':
          return '#FFD6D6';
        default:
          return '#fff';
      }
    };
  
    return (
      <View style={[styles.container, { backgroundColor: getBackgroundColor() }]}>
        <Image source={{ uri: icon }} style={styles.icon} />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text numberOfLines={2} style={styles.message}>{message}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        {unread && <View style={styles.unreadDot} />}
      </View>
    );
  };

export default NotificationItems;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#eee',
  },
  content: {
    marginLeft: 15,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  message: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
  unreadDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#3498db',
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
