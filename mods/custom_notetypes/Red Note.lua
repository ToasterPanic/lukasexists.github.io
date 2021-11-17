function onCreate()
	--Iterate over all notes
	for i = 0, getProperty('unspawnNotes.length')-1 do
		--Check if the note is an Red Note
		if getPropertyFromGroup('unspawnNotes', i, 'noteType') == 'Red Note' then
			setPropertyFromGroup('unspawnNotes', i, 'texture', 'rednote'); --Change texture
				setPropertyFromGroup('unspawnNotes', i, 'ignoreNote', false); --Miss has no penalties
		end
	end
	--debugPrint('Script started!')
	function noteMiss(id, i, noteType, isSustainNote)
		if noteType == 'Red Note' then
			playSound('shot', 1)
			setProperty('health', -500);

	end
end
end

function goodNoteHit(id, noteData, noteType, isSustainNote)
	if noteType == 'Red Note' then
		playSound('missshot', 1)
		characterPlayAnim('boyfriend', 'dodge', true);
	end
end

function noteMiss(id, direction, noteType, isSustainNote)
        if noteType == "Red Note" then
		playSound('shot', 1)
                setProperty('health', -500);
        end
end