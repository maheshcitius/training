import { Icon } from "@iconify/react";
import { useRef, useState } from "react";
import editFill from "@iconify/icons-eva/edit-fill";
import { Link as RouterLink, NavLink, useNavigate } from "react-router-dom";
import trash2Outline from "@iconify/icons-eva/trash-2-outline";
import moreVerticalFill from "@iconify/icons-eva/more-vertical-fill";
import eyeOutline from "@iconify/icons-eva/eye-outline";
import { userInformation } from "../../../services";
// material
import {
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

// ----------------------------------------------------------------------

export default function AppointmentMoreMenu({
  item,
  handleDelete,
  handleEdit,
  handleChangePhysician,
  ...props
}) {
  const navigate = useNavigate();
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const user = userInformation.getCurrentUser();

  console.log("in menu", item);

  function hd(item) {
    console.log("sss");
    handleDelete(item);
  }

  const view = (item) => navigate(`${item.id}`, { state: item });

  return (
    <>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <Icon icon={moreVerticalFill} width={20} height={20} />
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: "100%" },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {user?.user?.role !== "patient" && (
          <>
            <MenuItem sx={{ color: "text.secondary" }} onClick={() => hd(item)}>
              <ListItemIcon>
                <Icon icon={trash2Outline} width={24} height={24} />
              </ListItemIcon>
              <ListItemText
                primary="Delete"
                primaryTypographyProps={{ variant: "body2" }}
              />
            </MenuItem>
            <MenuItem
              onClick={() => handleEdit(item)}
              component={RouterLink}
              to="#"
              sx={{ color: "text.secondary" }}
            >
              <ListItemIcon>
                <Icon icon={editFill} width={24} height={24} />
              </ListItemIcon>
              <ListItemText
                primary="Edit"
                primaryTypographyProps={{ variant: "body2" }}
              />
            </MenuItem>
            <MenuItem
              onClick={() => handleChangePhysician(item)}
              component={RouterLink}
              to="#"
              sx={{ color: "text.secondary" }}
            >
              <ListItemIcon>
                <Icon icon={editFill} width={24} height={24} />
              </ListItemIcon>
              <ListItemText
                primary="Change Physician"
                primaryTypographyProps={{ variant: "body2" }}
              />
            </MenuItem>{" "}
          </>
        )}
        <MenuItem
          component={NavLink}
          to={`${item.id}`}
          sx={{ color: "text.secondary" }}
        >
          <ListItemIcon>
            <Icon icon={eyeOutline} width={24} height={24} />
          </ListItemIcon>
          <ListItemText
            primary="View Details"
            primaryTypographyProps={{ variant: "body2" }}
          />
        </MenuItem>
      </Menu>
    </>
  );
}
