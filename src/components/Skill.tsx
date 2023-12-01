interface SkillProps {
  icon: React.ReactNode;
  title: string;
}

function Skill({ icon, title }: SkillProps) {

  return (
    <div className="skill" title={title}>
        <p>{icon}</p>
        <small>{title}</small>
    </div>
  )
}

export default Skill