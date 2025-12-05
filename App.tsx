import React, { useState, useEffect } from 'react';
import { BottomNav } from './components/BottomNav';
import { Home } from './components/Home';
import { WasteGuide } from './components/WasteGuide';
import { Scanner } from './components/Scanner';
import { Marketplace } from './components/Marketplace';
import { Chatbot } from './components/Chatbot';
import { Profile } from './components/Profile';
import { UserState, ScanResult, UMKMProduct } from './types';

function App() {
  // Simple state management
  const [activeTab, setActiveTab] = useState('home');
  const [userState, setUserState] = useState<UserState>({
    points: 1250,
    history: []
  });
  const [notification, setNotification] = useState<{message: string, type: 'success' | 'error'} | null>(null);

  // Auto-hide notification
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleScanComplete = (result: ScanResult) => {
    setUserState(prev => ({
      ...prev,
      points: prev.points + result.pointsAwarded,
      history: [{
        id: Date.now().toString(),
        date: new Date().toISOString(),
        description: `Scan: ${result.itemName}`,
        amount: result.pointsAwarded,
        type: 'EARN'
      }, ...prev.history]
    }));
    setNotification({
      message: `Sukses! +${result.pointsAwarded} Poin dari ${result.itemName}`,
      type: 'success'
    });
    setActiveTab('home');
  };

  const handleRedeem = (item: UMKMProduct) => {
    if (userState.points >= item.pointsCost) {
      setUserState(prev => ({
        ...prev,
        points: prev.points - item.pointsCost,
        history: [{
          id: Date.now().toString(),
          date: new Date().toISOString(),
          description: `Tukar: ${item.name}`,
          amount: -item.pointsCost,
          type: 'SPEND'
        }, ...prev.history]
      }));
      setNotification({
        message: `Berhasil menukar ${item.name}. Tunjukkan kode QR di toko.`,
        type: 'success'
      });
    } else {
      setNotification({
        message: 'Poin tidak cukup!',
        type: 'error'
      });
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home userState={userState} onChangeTab={setActiveTab} />;
      case 'guide':
        return <WasteGuide />;
      case 'scan':
        return <Scanner onScanComplete={handleScanComplete} />;
      case 'market':
        return <Marketplace userPoints={userState.points} onRedeem={handleRedeem} />;
      case 'chat':
        return <Chatbot />;
      case 'profile':
        return <Profile userState={userState} />;
      default:
        return <Home userState={userState} onChangeTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Dynamic Content */}
      <main className="w-full mx-auto min-h-screen">
        {renderContent()}
      </main>

      {/* Notification Toast */}
      {notification && (
        <div className={`fixed top-4 left-4 right-4 z-[60] p-4 rounded-xl shadow-2xl transform transition-all animate-fade-in-down ${
          notification.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-500 text-white'
        }`}>
           <p className="font-medium text-center">{notification.message}</p>
        </div>
      )}

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;