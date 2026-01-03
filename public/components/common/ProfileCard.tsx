"use client";

import { useState } from "react";

export default function ProfileCard() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Sunil Kumar",
    email: "sunil@example.com",
    role: "Traveler",
    bio:
      "Passionate traveler with a deep interest in exploring cultures, landscapes, and local experiences. I enjoy planning detailed itineraries and discovering offbeat destinations.",
    trips: "12+",
    countries: "4",
    travelStyle: "Budget · Cultural · Adventure",
    memberSince: "2025",
  });

  const [draft, setDraft] = useState(profile);

  const handleSave = () => {
    setProfile(draft);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setDraft(profile);
    setIsEditing(false);
  };

  return (
    <div className="relative bg-card border border-border rounded-2xl p-8 shadow-xl max-w-xl">
      
      {/* Header */}
      <div className="flex items-center gap-6 mb-6">
        <div className="w-24 h-24 rounded-full bg-secondary border-2 border-primary/30 flex items-center justify-center text-4xl font-bold text-primary">
          {profile.name.charAt(0)}
        </div>

        <div className="flex-1">
          {isEditing ? (
            <input
              value={draft.name}
              onChange={(e) =>
                setDraft({ ...draft, name: e.target.value })
              }
              className="text-2xl font-bold bg-transparent border-b border-border focus:outline-none w-full"
            />
          ) : (
            <h2 className="text-3xl font-bold">{profile.name}</h2>
          )}

          <p className="text-primary text-sm">{profile.email}</p>
        </div>
      </div>

      {/* About */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">About</h3>

        {isEditing ? (
          <textarea
            value={draft.bio}
            onChange={(e) =>
              setDraft({ ...draft, bio: e.target.value })
            }
            rows={4}
            className="w-full bg-secondary border border-border rounded-lg p-3 focus:outline-none"
          />
        ) : (
          <p className="text-sm text-muted leading-relaxed">
            {profile.bio}
          </p>
        )}
      </div>

      {/* Info Blocks */}
      <div className="space-y-3 text-sm">
        <InfoRow label="Role" value={profile.role} />
        <InfoRow label="Trips Planned" value={profile.trips} />
        <InfoRow label="Countries Visited" value={profile.countries} />
        <InfoRow label="Travel Style" value={profile.travelStyle} />
        <InfoRow label="Member Since" value={profile.memberSince} />
      </div>

      {/* Actions */}
      <div className="mt-8 flex gap-4">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="flex-1 bg-primary text-primary-foreground py-3 rounded-xl font-medium"
            >
              Save Changes
            </button>

            <button
              onClick={handleCancel}
              className="flex-1 border border-border py-3 rounded-xl"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="flex-1 border border-border py-3 rounded-xl hover:border-primary hover:text-primary transition"
            >
              Edit Profile
            </button>

            <button
              className="flex-1 bg-rose-500/10 text-rose-500 py-3 rounded-xl hover:bg-rose-500 hover:text-white transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

/* Helper */
function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between p-4 rounded-xl bg-secondary/30 border border-border">
      <span className="text-muted">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
