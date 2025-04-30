import { NPC } from '@/types/campaign';

interface NPCDetailsProps {
  npc: NPC;
}

export default function NPCDetails({ npc }: NPCDetailsProps) {
  return (
    <div className="text-sm text-gray-600">
      <p>Race: {npc.race || 'Not specified'}</p>
      <p>Class: {npc.class || 'Not specified'}</p>
      <p>Alignment: {npc.alignment || 'Unknown'}</p>
    </div>
  );
}