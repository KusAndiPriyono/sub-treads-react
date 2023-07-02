import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { asyncReceiveThreadDetail } from "../states/threadDetail/action";
import { Box, Card, CardContent } from "@mui/material";
import DetailThreadHeader from "../components/threadDetail/DetailThreadHeader";
import DetailThreadContent from "../components/threadDetail/DeatilThreadContent";
import DetailThreadFooter from "../components/threadDetail/DetailThreadFooter";
import DetailThreadComment from "../components/threadDetail/DetailThreadComment";

const drawerWidth = 240;

function DetailPage() {
  const { id } = useParams();
  const { threadDetail = null } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  if (!threadDetail) return null;

  return (
    <Box
      position="absolute"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Card
        sx={{
          margin: 2,
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "black",
        }}
      >
        <DetailThreadHeader detail={threadDetail} />
        <DetailThreadContent detail={threadDetail} />
        <DetailThreadFooter detail={threadDetail} />
        <DetailThreadComment detail={threadDetail} />
      </Card>
    </Box>
  );
}

export default DetailPage;
