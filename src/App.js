import Typography from "@mui/material/Typography";
import GroupOrientation from "./components/ButtonGroup";
import BarChartCard from "./components/chart";
function App() {
    return (
        <>
            <Typography variant="h5" component="h2"  sx={{ margin: 2 }}>
                1 .請使⽤ Material-UI 中的 Button group，做出三個按鈕 (使⽤
                Redux 加分)。
            </Typography>
            <GroupOrientation />
            <Typography variant="h5" component="h2"  sx={{ margin: 2 }}>
                2.	請使⽤任⼀套件，做出以下圖表，資料部分請拉取公開 API
            </Typography>
            <BarChartCard/>
        </>
    );
}

export default App;
