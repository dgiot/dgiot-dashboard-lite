import defaultSettings from '../settings.json';
export interface GlobalState {
  settings?: typeof defaultSettings;
  userInfo?: {
    name?: string;
    avatar?: string;
    job?: string;
    organization?: string;
    location?: string;
    email?: string;
    permissions: Record<string, string[]>;
  };
  defaultKonva?: string;

}

const initialState: GlobalState = {
  settings: defaultSettings,
  userInfo: {
    permissions: {},
  },
  defaultKonva: "{\"attrs\":{\"width\":1200,\"height\":700},\"className\":\"Stage\",\"children\":[{\"attrs\":{\"id\":\"Layer_Thing\"},\"className\":\"Layer\",\"children\":[{\"attrs\":{\"id\":\"bg\",\"type\":\"bg-image\",\"width\":1200,\"height\":700,\"src\":\"//img7.ddove.com/upload/20181127/134600237598.jpg?timestamp=1635422987361\"},\"className\":\"Image\"},{\"attrs\":{\"id\":\"_flow\",\"name\":\"thing\",\"x\":100,\"y\":100},\"className\":\"Label\",\"children\":[{\"attrs\":{\"draggable\":true,\"name\":\"dblclick\",\"width\":72.04296875,\"height\":48.8},\"className\":\"Tag\"},{\"attrs\":{\"draggable\":true,\"id\":\"d88c262aa4_flow_text\",\"text\":\"dgiot\",\"fontSize\":24,\"lineHeight\":1.2,\"padding\":10,\"fill\":\"yellow\"},\"className\":\"Text\"}]},{\"attrs\":{\"name\":\"thing\",\"x\":81,\"y\":62,\"id\":\"d88c262aa4_flow\"},\"className\":\"Label\",\"children\":[{\"attrs\":{\"hidden\":true,\"fill\":\"yellow\",\"draggable\":true,\"id\":\"d88c262aa4_flow_text\",\"text\":\"dgiot_flow_text8rrgo\",\"fontSize\":24,\"lineHeight\":1.2,\"padding\":10,\"visible\":false},\"className\":\"Text\"},{\"attrs\":{\"draggable\":true,\"name\":\"dblclick\",\"width\":236.12890625,\"height\":48.8},\"className\":\"Tag\"}]},{\"attrs\":{\"name\":\"evidence\",\"id\":\"d88c262aa4_evidence_17_live_tv\",\"evidenceList\":[],\"icon\":\"live_tv\",\"x\":187,\"y\":621,\"draggable\":true,\"data\":\"M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3c-1.1 0-2 .89-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2-2zm0 14H3V8h18v12zM9 10v8l7-4z\",\"handler\":\"dblclick\",\"fill\":\"black\",\"scaleX\":2,\"scaleY\":2},\"className\":\"Path\"},{\"attrs\":{\"name\":\"evidence\",\"id\":\"d88c262aa4_evidence_22_timeline\",\"evidenceList\":[],\"icon\":\"timeline\",\"x\":101,\"y\":625,\"draggable\":true,\"data\":\"M23,8c0,1.1-0.9,2-2,2c-0.18,0-0.35-0.02-0.51-0.07l-3.56,3.55C16.98,13.64,17,13.82,17,14c0,1.1-0.9,2-2,2s-2-0.9-2-2 c0-0.18,0.02-0.36,0.07-0.52l-2.55-2.55C10.36,10.98,10.18,11,10,11s-0.36-0.02-0.52-0.07l-4.55,4.56C4.98,15.65,5,15.82,5,16 c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2c0.18,0,0.35,0.02,0.51,0.07l4.56-4.55C8.02,9.36,8,9.18,8,9c0-1.1,0.9-2,2-2s2,0.9,2,2 c0,0.18-0.02,0.36-0.07,0.52l2.55,2.55C14.64,12.02,14.82,12,15,12s0.36,0.02,0.52,0.07l3.55-3.56C19.02,8.35,19,8.18,19,8 c0-1.1,0.9-2,2-2S23,6.9,23,8z\",\"handler\":\"dblclick\",\"fill\":\"black\",\"scaleX\":2,\"scaleY\":2},\"className\":\"Path\"},{\"attrs\":{\"name\":\"evidence\",\"id\":\"d88c262aa4_evidence_28_videocam_black\",\"evidenceList\":[],\"icon\":\"videocam_black\",\"x\":264,\"y\":625,\"draggable\":true,\"data\":\"M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12z\",\"handler\":\"dblclick\",\"fill\":\"black\",\"scaleX\":2,\"scaleY\":2},\"className\":\"Path\"},{\"attrs\":{\"name\":\"evidence\",\"id\":\"d88c262aa4_evidence_33_image\",\"evidenceList\":[],\"icon\":\"image\",\"x\":354,\"y\":626,\"draggable\":true,\"data\":\"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z\",\"handler\":\"dblclick\",\"fill\":\"black\",\"scaleX\":2,\"scaleY\":2},\"className\":\"Path\"},{\"attrs\":{\"name\":\"evidence\",\"id\":\"d88c262aa4_evidence_21_archive\",\"evidenceList\":[],\"icon\":\"archive\",\"x\":431,\"y\":624,\"draggable\":true,\"data\":\"M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z\",\"handler\":\"dblclick\",\"fill\":\"black\",\"scaleX\":2,\"scaleY\":2},\"className\":\"Path\"}]}]}",
};

export default function store(state = initialState, action) {
  switch (action.type) {
    case 'update-settings': {
      const { settings } = action.payload;
      return {
        ...state,
        settings,
      };
    }
    case 'update-userInfo': {
      const { userInfo = initialState.userInfo, userLoading } = action.payload;
      return {
        ...state,
        userLoading,
        userInfo,
      };
    }
    default:
      return state;
  }
}
