import { useState } from "react";
import { useUpdateUserMutation } from "../../apis/userApi";
import { Button, Typography, CircularProgress } from "@mui/material";

export default function UpdateButton({ userId }: { userId: string }) {
  const [updateUser, { isLoading, isSuccess }] = useUpdateUserMutation();
  const [message, setMessage] = useState("");

  const handleUpdate = async () => {
    try {
      await updateUser({ id: userId, data: { lastUpdated: new Date() } });
      setMessage("Update successful!");
    } catch {
      setMessage("Update failed.");
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={handleUpdate} disabled={isLoading}>
        {isLoading ? <CircularProgress size={24} /> : "Update User"}
      </Button>
      {message && (
        <Typography color={isSuccess ? "success.main" : "error"}>
          {message}
        </Typography>
      )}
    </div>
  );
}
