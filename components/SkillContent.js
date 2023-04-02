import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import CatchingPokemonOutlinedIcon from "@mui/icons-material/CatchingPokemonOutlined";
import {
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Rating,
} from "@mui/material";
import Image from "next/image";

const SkillContent = ({ src, title, subtitle, rating }) => {
  return (
    <Grid item xs={4}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Image src={src} alt="skill" width={40} height={40} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <div className="section_skills_title-wrap">
              {title}
              <Rating
                icon={<CatchingPokemonIcon fontSize="inherit" />}
                emptyIcon={<CatchingPokemonOutlinedIcon fontSize="inherit" />}
                className="section_skills_rating"
                name="read-only"
                size="small"
                value={rating}
                readOnly
              />
            </div>
          }
          secondary={subtitle}
        />
      </ListItem>
    </Grid>
  );
};

export default SkillContent;
