
import { ServiceTarget, ProjectScopeItem } from './types';

export const COMPANY_INFO = {
  name: '智匯企業有限公司',
  vatId: '95465859',
  address: '屏東縣屏東市頂柳里頂柳路442巷38弄15號',
  email: 'wu750922@gmail.com',
  phone: '08-721-XXXX',
};

export const FOUNDER_STORY = {
  background: "我們不是坐在辦公室想像工程的開發者，我們是從工地現場走出來的技術革命者。",
  about: "我們的 CEO 擁有超過 25 年的工程產業實戰經驗，深知工地現場的語言摩擦、計算誤差與技術斷層。這份深耕產業的底蘊，讓我們的 AI 具備了市面上通用 AI 所沒有的「產業直覺」。",
  capital: "目前已正式完成由頂尖天使輪創投領投的種子計畫。這份資金不僅支持我們的研發，更代表市場對我們「工程 AI 化」路徑的高度認可。",
  value: {
    alignment: "1 次精準對齊：一般 AI 需要 10 次指令才能勉強導入方向，我們的 AI 因為學習了您的個人知識，1 次就能理解您的眉角。",
    asset: "知識資產化：AI 會跟著師傅與企業一起成長，將 25 年的精華轉化為扣不掉的企業利潤。"
  }
};

export const SERVICE_TARGETS: ServiceTarget[] = [
  {
    id: 'interior',
    title: '室內裝修產業',
    subcategories: ['系統櫃', '木工', '油漆'],
    description: '解決裝修過程中繁雜的裁切清單與物料損耗計算，讓設計師能精準掌握成本。'
  },
  {
    id: 'civil',
    title: '土木建築工程',
    subcategories: ['模板', '鋼筋', '混凝土'],
    description: '針對大體積材料驗算，透過 AI 自動生成施工圖與計算書，降低人為誤差。'
  },
  {
    id: 'hvac',
    title: '水電空調系統',
    subcategories: ['機電', '弱電', '消防'],
    description: '整合管線佈置與點位計算，讓機電配管與弱電系統施工更具結構性。'
  },
  {
    id: 'landscape',
    title: '景觀與基礎設施',
    subcategories: ['綠化', '土方', '整地'],
    description: '動態模擬土方挖填平衡，精準預估植栽物料與景觀工程進度。'
  },
  {
    id: 'consultant',
    title: '工程管理與顧問',
    subcategories: ['統包', '監造', '營造廠'],
    description: 'AI 監測進度與品質，建立專屬數位知識資產，確保工程依時依質完成。'
  }
];

export const PROJECT_SCOPE: ProjectScopeItem[] = [
  {
    title: 'AI 數位分身開發',
    description: '針對特定老闆與企業的技術傳承。將您的實戰經驗轉化為不流失的數位資產。',
    icon: '👤'
  },
  {
    title: '精準計算引擎開發',
    description: '高頻率碎數與報價邏輯自動化。解決複雜工程算量，杜絕人為錯誤。',
    icon: '⚙️'
  },
  {
    title: '產業知識庫建置',
    description: '封閉式、高隱私的工程數據環境。在安全的環境下訓練專屬於企業的 AI。',
    icon: '🛡️'
  },
  {
    title: '供應鏈 AI 對接系統',
    description: '自動化材料對接與決策支援。將混亂的工地需求與精準的供應商數據即時連動。',
    icon: '🔗'
  }
];
