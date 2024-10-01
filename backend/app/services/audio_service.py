import subprocess

def convert_audio_to_wav(input_file, output_file):
    command = ['ffmpeg', '-i', input_file, output_file]
    subprocess.run(command, check=True)
    return output_file

def apply_effect_to_audio(file_path, effect):
    # Здесь можно использовать библиотеку для обработки аудио, например pydub
    from pydub import AudioSegment

    audio = AudioSegment.from_file(file_path)
    if effect == 'reverse':
        audio = audio.reverse()

    output_file = f'{file_path.split(".")[0]}_processed.wav'
    audio.export(output_file, format='wav')
    return output_file
